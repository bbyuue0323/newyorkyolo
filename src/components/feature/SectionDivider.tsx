
interface SectionDividerProps {
  fromColor: string;
  toColor: string;
  flip?: boolean;
}

export default function SectionDivider({ fromColor, toColor, flip = false }: SectionDividerProps) {
  return (
    <div style={{ backgroundColor: toColor, marginTop: '-1px', lineHeight: 0 }}>
      <div
        style={{
          backgroundColor: fromColor,
          height: '60px',
          borderRadius: flip ? '0 0 60px 0' : '0 0 0 60px',
        }}
      />
    </div>
  );
}
