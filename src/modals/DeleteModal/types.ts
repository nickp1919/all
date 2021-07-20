export type DeleteBlockProps = {
  onClose: () => void;
  onConfirm: () => void;
  text?: string;
  title?: string;
  windowLevel?: number;
  visible: boolean;
};
