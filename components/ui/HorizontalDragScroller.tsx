"use client";

import clsx from "clsx";
import {
  type HTMLAttributes,
  type PointerEvent as ReactPointerEvent,
  useEffect,
  useRef,
} from "react";

type HorizontalDragScrollerProps = HTMLAttributes<HTMLDivElement>;

export default function HorizontalDragScroller({
  children,
  className,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onPointerCancel,
  onPointerLeave,
  ...props
}: HorizontalDragScrollerProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const dragStateRef = useRef({
    isDragging: false,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
  });
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const stopInertia = () => {
    if (animationFrameRef.current === null) {
      return;
    }

    cancelAnimationFrame(animationFrameRef.current);
    animationFrameRef.current = null;
  };

  const restoreSnap = () => {
    const scroller = scrollerRef.current;

    if (scroller) {
      scroller.style.scrollSnapType = "";
    }
  };

  const startInertia = () => {
    const scroller = scrollerRef.current;
    let velocity = dragStateRef.current.velocity;
    let lastTime = performance.now();

    if (!scroller || Math.abs(velocity) < 0.05) {
      restoreSnap();
      return;
    }

    const step = (time: number) => {
      const elapsed = time - lastTime;
      const previousScrollLeft = scroller.scrollLeft;

      lastTime = time;
      scroller.scrollLeft += velocity * elapsed;
      velocity *= 0.94;

      const hitScrollEdge = scroller.scrollLeft === previousScrollLeft;

      if (Math.abs(velocity) < 0.03 || hitScrollEdge) {
        animationFrameRef.current = null;
        restoreSnap();
        return;
      }

      animationFrameRef.current = requestAnimationFrame(step);
    };

    animationFrameRef.current = requestAnimationFrame(step);
  };

  const finishDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const scroller = scrollerRef.current;

    if (event.pointerType !== "mouse" && event.pointerType !== "pen") {
      return;
    }

    dragStateRef.current.isDragging = false;

    if (scroller?.hasPointerCapture(event.pointerId)) {
      scroller.releasePointerCapture(event.pointerId);
    }

    startInertia();
  };

  return (
    <div
      ref={scrollerRef}
      className={clsx("cursor-grab select-none active:cursor-grabbing", className)}
      onPointerDown={(event) => {
        onPointerDown?.(event);

        if (
          event.defaultPrevented ||
          (event.pointerType !== "mouse" && event.pointerType !== "pen") ||
          event.button !== 0
        ) {
          return;
        }

        const scroller = scrollerRef.current;

        if (!scroller) {
          return;
        }

        stopInertia();
        scroller.style.scrollSnapType = "none";
        dragStateRef.current = {
          isDragging: true,
          lastX: event.clientX,
          lastTime: performance.now(),
          velocity: 0,
        };
        scroller.setPointerCapture(event.pointerId);
      }}
      onPointerMove={(event) => {
        onPointerMove?.(event);

        const scroller = scrollerRef.current;
        const dragState = dragStateRef.current;

        if (
          !scroller ||
          !dragState.isDragging ||
          (event.pointerType !== "mouse" && event.pointerType !== "pen")
        ) {
          return;
        }

        event.preventDefault();
        const time = performance.now();
        const elapsed = Math.max(time - dragState.lastTime, 1);
        const scrollDelta = dragState.lastX - event.clientX;

        scroller.scrollLeft += scrollDelta;
        dragState.velocity = scrollDelta / elapsed;
        dragState.lastX = event.clientX;
        dragState.lastTime = time;
      }}
      onPointerUp={(event) => {
        onPointerUp?.(event);
        finishDrag(event);
      }}
      onPointerCancel={(event) => {
        onPointerCancel?.(event);
        finishDrag(event);
      }}
      onPointerLeave={(event) => {
        onPointerLeave?.(event);
        finishDrag(event);
      }}
      {...props}
    >
      {children}
    </div>
  );
}
