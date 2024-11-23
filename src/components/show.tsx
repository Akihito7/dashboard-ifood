interface ShowProps {
  Component: React.ComponentType<any>;
  Fallback: React.ElementType;
  whenShow: boolean;
}

export function Show({ Component, Fallback, whenShow }: ShowProps) {
  return <>{whenShow ? <Component /> : <Fallback />}</>;
}
