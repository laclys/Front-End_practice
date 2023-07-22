/* localForage: https://github.com/localForage/localForage */

import { useCallback, useEffect, useRef, useState } from 'react';
import localforage from 'localforage';

export function useLocalStorage<T>(
  /* 存储数据时使用的键名，它会被用来在LocalStorage中唯一标识数据 */
  key: string,
  /* 默认值 */
  defaultValue: T,
  /* 是否在第一次渲染时使用默认值 */
  isDefaultOnFirst: boolean = true,
  /* 用于生成实际的存储键名 */
  pathname?: string,
) {
  const refKey = useRef(key);
  const refInit = useRef(false);

  const EventMapRef = useRef(new Map<string, Function[]>());
  const EventEmitterRef = useRef(
    class EventEmitter {
      static on<T>(key: string, callback: (value: T) => void) {
        if (EventMapRef.current.has(key)) {
          EventMapRef.current.get(key)?.push(callback);
        } else {
          EventMapRef.current.set(key, [callback]);
        }
        return () => {
          const funcList = EventMapRef.current.get(key);
          EventMapRef.current.set(
            key,
            funcList!.filter((func) => func !== callback),
          );
        };
      }
      static emit<T>(key: string, value: T) {
        if (EventMapRef.current.has(key)) {
          EventMapRef.current.get(key)?.forEach((func) => {
            func(value);
          });
        }
      }
    },
  );

  function getStoredValue() {
    return new Promise<T>((resolve) => {
      localforage
        .getItem(refKey.current)
        .then((raw) => {
          if (typeof raw !== 'undefined' && raw !== null) {
            resolve(raw as T);
          } else {
            resolve(defaultValue);
          }
        })
        .catch((e) => {
          console.error(e);
          resolve(defaultValue);
        });
    });
  }

  const [state, setState] = useState(
    isDefaultOnFirst ? defaultValue : undefined,
  );
  const [initSetList, setInitSetList] = useState<Function[]>([]);

  useEffect(() => {
 
    const path = pathname || location.pathname.replace(/\//g, '_');
    refKey.current = `${path}-${key}`;
    getStoredValue().then((value) => {
      setState(value);
      if (initSetList.length) {
        initSetList.forEach((func) => func());
      }
    });
    refInit.current = true;
  }, [key, pathname]);

  useEffect(() => {
    const handleEventEmitter = (eventValue: T) => {
      if (JSON.stringify(eventValue) !== JSON.stringify(state)) {
        updateState(eventValue, true);
      }
    };
    const removeHandler = EventEmitterRef.current.on<T>(
      key,
      handleEventEmitter,
    );
    return () => {
      removeHandler();
    };
  }, [state]);

  const updateState = useCallback(
    (value: T, isEmit?: boolean) => {
      function updateForageState(currentState: T) {
        setState(currentState);

        if (typeof currentState === 'undefined') {
          localforage.removeItem(refKey.current);
        } else {
          localforage
            .setItem(refKey.current, currentState)
            .then(() => {
              if (!isEmit) {
                console.log('emit');
                EventEmitterRef.current.emit(key, currentState);
              }
            })
            .catch((e) => {
              console.error(e);
            });
        }
      }
      if (!refInit.current) {
        setInitSetList((list) => [
          ...list,
          updateForageState.bind(useLocalStorage, value),
        ]);
      } else {
        updateForageState(value);
      }
    },
    [refKey, refInit, key],
  );

  return [state, updateState] as const;
}

