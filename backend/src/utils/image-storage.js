import { randomUUID } from "crypto";
import { mkdir, unlink, writeFile } from "fs/promises";
import path from "path";
import { fileTypeFromBuffer } from "file-type";
import { fileURLToPath } from "url";

export const uploadsDirectory = fileURLToPath(new URL("../../uploads",import.meta.url));

const extensionsByMimeType = new Map([
    ['image/jpeg', '.jpg'],
    ['image/png', '.png'],
    ['image/gif', '.gif'],
    ['image/webp', '.webp']
]);

export async function saveUploadedImage(file) {
    const detectedType = await fileTypeFromBuffer(file.buffer);
    const extension = extensionsByMimeType.get(detectedType?.mime);

    if (!extension) return null;

    // Create the uploads directory if it doesn't exist
    await mkdir(uploadsDirectory, { recursive: true });

    const filename = `${randomUUID()}.${extension}`;
    await writeFile(path.join(uploadsDirectory, filename), file.buffer, { flag: "wx" });

    return `/uploads/${filename}`;
}

export async function deleteStoredImage(imageUrl) {
  if (!imageUrl.startsWith("/uploads/")) return; 
  // Ignore if the imageUrl doesn't start with "/uploads/";


    // Implementation for deleting the stored image based on the provided imageUrl
    const filename = imageUrl.slice("/uploads/".length);

 
//    Validate the filename to ensure it doesn't contain any directory traversal characters or invalid characters
    if(!/^[a-zA-Z0-9_-]+\.[a-zA-Z0-9]+$/.test(filename)){
        throw new Error("Invalid filename format");
    }
    try{
        await unlink(path.join(uploadsDirectory, filename));
    } catch (error) {
       if (error.code !== 'ENOENT') {
            throw error; // Rethrow the error if it's not a "file not found" error
    }
    }


}