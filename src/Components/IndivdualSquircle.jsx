export default function IndividualSquircle({diameter, color, borderType}) {
  function handleSquircleRadius(diameter) {
    const radius = diameter / 3.35;
    return radius;
  }

  return (
    <div className="indivdual-squircle"
      style={{
        position: "absolute",
        width: `${diameter}px`,
        height: `${diameter}px`,
        border: `3px ${borderType} ${color}`,
        borderTopLeftRadius: `${handleSquircleRadius(diameter)}px`,
        borderTopRightRadius: `${handleSquircleRadius(diameter)}px`,
        borderBottomRightRadius: `${handleSquircleRadius(diameter)}px`,
        borderBottomLeftRadius: `${handleSquircleRadius(diameter)}px`,
      }}
    ></div>
  );
}
