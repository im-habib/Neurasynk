import NeurasynkError from "@/components/NeurasynkError";
import { NEURASYNK_ERRORS } from "@/lib/neurasynk-error-map";

export default function NotFound() {
  return <NeurasynkError info={NEURASYNK_ERRORS["404"]} />;
}
