import { useRef, useState } from "react";
import { CoverUploader } from "../../components/FileUploader";
import "./index.css"
import { AddCircle } from "iconsax-react";
import Alert from "../../components/Alert";

const PublishBook = () => {
  const [BookPdf, setBookPdf] = useState(null);
  const [tags, setTags] = useState([]);
  const BookRef = useRef(null);
  const uploadBook = async (e) => {
    e.preventDefault();
    let data = {};
    for (let i of e.target) {
      if (!i.name) continue;
      data[i.name] = i.value;
    }
    delete data["tags"];
    data["tags"] = tags;
    console.info(data);
  };
  const handleFileUpload = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) return;
    const allowedExtensions = ["pdf", "PDF"];
    if (!allowedExtensions.includes(file.name.toLowerCase().split(".").pop())) {
      Alert("only pdf format files are allowed");
    } else {
      setBookPdf(true);
    }
  };
  const handleTags = async (e) => {
    // e.preventDefault();

    // console.log(e.target.value);
    // console.log(e.key);
    // try {
    //   const data = await fetch('/api/v1/tag', {
    //     method: "POST",
    //     header: {
    //       "Content-Type": "application/json",
    //     },
    //     body: {
    //       name: e.target.value,
    //     }
    //   });
    // }catch(err){
    //   console.error(err);
    // }
  }
  const handleTagChange = async () => {

  }
  return (
    <section className="publishing-book">
      <h1 style={{ padding: "1rem 0px", margin: "0px" }}>Publishing Book</h1>
      <form onSubmit={uploadBook} className="book-details">
        <div style={{ display: "flex", alignItems: "center", height: "100%", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: "550" }}>
            <input style={{ position: "absolute" }} type="file" ref={BookRef} name="file" id="fileInput" accept="application/pdf" onChange={handleFileUpload} className="coverimg-uploader" />
            {
              BookPdf ?
                <p>File</p>
                : <>
                  <AddCircle onClick={() => BookRef.current.click()} style={{ cursor: "pointer" }} size="32" color="#37d67a" variant="Bold" />
                  <p>upload the file</p>
                </>
            }
          </div>
          <CoverUploader />
        </div>
        <div className="book-detail">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" />
          <label htmlFor="tags">Tags</label>
          <input onChange={handleTagChange} onKeyDown={handleTags} type="text" name="tags" />
          <label htmlFor="price">Price</label>
          <input type="text" name="price" />
          <label htmlFor="decription">Description</label>
          <textarea type="text" name="description" />
          <input type="submit" className="publish-submit" value="Publish" />
        </div>
      </form>
    </section>
  );
}


export default PublishBook;
