
import { motion } from "framer-motion";

interface DotPosition {
  top: number;
  left: number;
  w: number;
  h: number;
  rotate?: number;
}

function computePositions(state: "open" | "hovered" | "default", C: number): DotPosition[] {
  const D = 4; // Kích thước mỗi chấm lúc bình thường
  const mid = C / 2 - D / 2;
  const R = 15; // Bán kính vòng tròn khi tản ra
  const cx = C / 2;
  const cy = C / 2;

  // 1. Vị trí hình vuông 3x3 (Mặc định)
  const squarePositions: DotPosition[] = [
    { top: 0, left: 0, w: D, h: D },                  // 0: Top-Left
    { top: 0, left: mid, w: D, h: D },                // 1: Top-Center
    { top: 0, left: C - D, w: D, h: D },              // 2: Top-Right
    { top: mid, left: 0, w: D, h: D },                // 3: Mid-Left
    { top: mid, left: mid, w: D, h: D },              // 4: Center
    { top: mid, left: C - D, w: D, h: D },            // 5: Mid-Right
    { top: C - D, left: 0, w: D, h: D },              // 6: Bottom-Left
    { top: C - D, left: mid, w: D, h: D },            // 7: Bottom-Center
    { top: C - D, left: C - D, w: D, h: D },          // 8: Bottom-Right
  ];

  // Hàm toán học tính tọa độ xoay quanh tâm
  const getDot = (angle: number, size: number): DotPosition => {
    const rad = (angle * Math.PI) / 180;
    const x = cx + R * Math.cos(rad);
    const y = cy + R * Math.sin(rad);
    return { top: y - size / 2, left: x - size / 2, w: size, h: size };
  };

  // 2. Vị trí vòng tròn (Hover)
  const hoverD = 5; // Kích thước chấm khi tản ra vòng tròn (to hơn xíu)
  const circularPositions: DotPosition[] = [
    getDot(225, hoverD), // 0: Đẩy ra góc
    getDot(270, hoverD), // 1: Đẩy lên trên
    getDot(315, hoverD), // 2: ...
    getDot(180, hoverD), // 3
    { top: cy - hoverD / 2, left: cx - hoverD / 2, w: hoverD, h: hoverD }, // 4: Chấm tâm đứng im
    getDot(0, hoverD),   // 5
    getDot(135, hoverD), // 6
    getDot(90, hoverD),  // 7
    getDot(45, hoverD),  // 8
  ];

  if (state === "hovered") {
    return circularPositions;
  }

  if (state === "open") {
    // Biến thành 1 dấu chấm (.) ở giữa thay vì dấu X
    const dotSize = 6; // Kích thước của dấu chấm khi mở (bạn có thể tăng giảm tùy ý)

    return squarePositions.map((_, i) => {
      // Giữ lại chấm số 4 (chính giữa) và cho nó hiện ra
      if (i === 4) {
        return {
          top: cy - dotSize / 2,
          left: cx - dotSize / 2,
          w: dotSize,
          h: dotSize,
          rotate: 0
        };
      }
      // Thu nhỏ và hút 8 chấm còn lại vào tâm để ẩn đi
      return { top: cy, left: cx, w: 0, h: 0, rotate: 0 };
    });
  }

  return squarePositions;
}

export function DotGrid({ hovered, open }: { hovered: boolean; open: boolean }) {
  const C = 24;
  const state = open ? "open" : hovered ? "hovered" : "default";
  const positions = computePositions(state, C);
  return (
    <motion.div style={{ position: "relative", flexShrink: 0 }} animate={{ width: C, height: C }}
      initial={{ width: 24, height: 24 }}
      transition={{ type: "spring", stiffness: 400, damping: 26 }}>
      {positions.map((pos, i) => (
        <motion.div key={i} style={{ position: "absolute", borderRadius: "150px" }}
          animate={{
            top: pos.top,
            left: pos.left,
            width: pos.w,
            height: pos.h,
            rotate: pos.rotate || 0,
            backgroundColor: "#ffffff",
            opacity: pos.w === 0 ? 0 : 1
          }}
          initial={false} transition={{ type: "spring", stiffness: 420, damping: 26, delay: i * 0.01 }} />
      ))}
    </motion.div>
  );
}