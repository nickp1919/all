export type TLoaderProps = {
  onReady: (result: string | null) => void;
  onLoadStart?: () => void;
  onError?: (error: Error) => void;
};

export default async function CSImageLoad(src: string, options: TLoaderProps): Promise<void> {
  const { onReady, onLoadStart, onError } = options;

  try {
    if (onLoadStart) {
      onLoadStart();
    }

    const reader = new FileReader();
    const response = await fetch(src);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const blob = await response.blob();

    reader.onloadend = function () {
      onReady(this.result as string);
    };

    reader.readAsDataURL(blob);
  } catch (error) {
    if (onError) {
      onError(error);
    }
  }
}
