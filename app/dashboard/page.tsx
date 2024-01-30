import Dropzone from "@/components/Dropzone";
import TableWrapper from "@/components/table/TableWrapper";
import { db } from "@/firebase";
import { FileType } from "@/typing";
import { auth } from "@clerk/nextjs";
import { collection, getDocs } from "firebase/firestore";

async function dashboard() {
  // Retrieve the user ID using Clerk authentication
  const { userId } = auth();

  // Retrieve documents from the "files" collection in Firestore for the current user
  const docsResults = await getDocs(collection(db, "users", userId!, "files"))

  // Create an array of FileType objects based on the retrieved documents
  const skeletonFiles: FileType[] = docsResults.docs.map(doc => ({
    id: doc.id,
    filename: doc.data().filename || doc.id,
    timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
    fullname: doc.data().fullName,
    downloadURL: doc.data().downloadURL,
    type: doc.data().type,
    size: doc.data().size,
  }));

  // Log the created FileType array
  console.log(skeletonFiles);

  
  // Return JSX for the dashboard component
  return (
    <div className="border-t">
      <Dropzone />

      <section className="container space-y-5">
        <h2 className="font-bold">All Files</h2>

        <div>{/* TableWrapper */}
            <TableWrapper 
               skeletonFiles={skeletonFiles}
            />
        </div>    
      </section>
    </div>
  );
}

// Export the dashboard function as the default export for this module
export default dashboard;
