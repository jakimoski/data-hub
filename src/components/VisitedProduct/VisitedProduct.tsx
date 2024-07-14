import { useEffect } from "react";
import { Product } from "../../data/data";
import { useDispatch } from "react-redux";
import { visitedActions } from "../../store/visited-slice";

export default function VisitedProduct({ product }: { product: Product }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(visitedActions.addVisited(product));
  });
  return <div></div>;
}
