export type TConfrimModalProps = {
  visible: boolean;
  buttonText: string;
  buttonClose?: string;
  title?: string | React.ReactNode;
  text?: string | React.ReactNode;
  onClose: () => void;
  onConfirm: () => void;
  windowLevel: number;
};
