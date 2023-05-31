"use client";
import React, {
  PropsWithChildren,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ReactDOM from "react-dom";

const getOrCreateContainerById = (
  id: string,
  options?: { before: boolean }
) => {
  const el = document.getElementById(id);
  if (el) return el;

  const newEl = document.createElement("div");
  newEl.id = id;
  if (options?.before) document.body.prepend(newEl);
  else document.body.appendChild(newEl);

  return newEl;
};

interface Props {
  id?: string;
  before?: boolean;
  onMounted?: () => void;
}

export const Portal = ({
  children,
  id = "root-id",
  before = false,
  onMounted,
}: PropsWithChildren<Props>) => {
  const [container, setContainer] = useState<HTMLElement>();

  const onMountedRef = useRef(onMounted);

  useLayoutEffect(() => {
    onMountedRef.current = onMounted;
  });

  const containerCreated = !!container;

  useEffect(() => {
    if (containerCreated) onMountedRef.current?.();
  }, [containerCreated]);

  useEffect(() => {
    const el = getOrCreateContainerById(id, { before });
    setContainer(el);

    return () => {
      document.body.removeChild(el);
    };
  }, [before, id]);

  return container ? ReactDOM.createPortal(children, container) : null;
};

export default Portal;
