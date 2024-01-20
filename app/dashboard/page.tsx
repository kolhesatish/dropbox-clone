import Dropzone from "@/components/Dropzone";
import { auth } from "@clerk/nextjs";

function dashboard() {
  const { userId } = auth();
  return (
  <div>
    <Dropzone />
  </div>
  );
}

export default dashboard;