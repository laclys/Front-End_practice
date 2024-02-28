import { Modal } from "antd";
import useCustomPrompt from "./hooks/useCustomPrompt";

const confirm = ({ onConfirm, onCancel }) => {
  Modal.confirm({
    title: "Are you sure you want to leave this page?",
    content: "Some descriptions",
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      onConfirm();
    },
    onCancel() {
      onCancel();
    },
  });
};

const PageB = () => {
  useCustomPrompt({
    when: true,
    customFn: (resolve, reject) =>
      confirm({
        onConfirm: resolve,
        onCancel: () => reject(),
      }),
  });
  return (
    <div>
      <h1>PageB</h1>
    </div>
  );
};

export default PageB;
