import { useEffect, useState } from "react";
import "../App.css";

const image = [
  "https://www.reliancedigital.in/medias/Umbrella-Offer-Carousel-Banner-31-03-2022.jpg?context=bWFzdGVyfGltYWdlc3w3OTk1NXxpbWFnZS9qcGVnfGltYWdlcy9oZDMvaDU0Lzk4MDYwNzc2NTcxMTguanBnfDA0N2JiOWVlZWU4NGRhZTQzNjYyMTljZGMyOTdmOGQ4ZWMwNzlhMWI2MWU3MWNiNTYzMDAwODYwYjQzNzYwY2Q",
  "https://www.reliancedigital.in/medias/iPhone-12-CLP-Banner-25-04-2022.jpg?context=bWFzdGVyfGltYWdlc3w2NTQwNnxpbWFnZS9qcGVnfGltYWdlcy9oZDUvaDA2Lzk4MTkyNDExODUzMTAuanBnfDRjNjA3NTUwZTNmYjc2NGQ4NDM2NGVmZDA3OTFkNjlkM2FjMjE1YzUwYTBhYmQyNWIzZjFlM2U3NjZhM2IyNDE",
  "https://www.reliancedigital.in/medias/Kodak-HD-LED-Smart-TVs.jpg?context=bWFzdGVyfGltYWdlc3wxNDczNzZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDUyL2gxNi85ODE4MDUyMjMxMTk4LmpwZ3wzMTRiMzU2NTEzZjYwN2ZmZTliNjg0ZTE0NjM2YzcwOGY4MTZhMDExMTBkNmYwYWRhYWY4YjlhMThmN2U3NzVk",
  "https://www.reliancedigital.in/medias/Samsung-AC-Price-Drop-Banner.jpg?context=bWFzdGVyfGltYWdlc3wxNzA3NDZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGVlL2g0Mi85ODE5MjQzMTUxMzkwLmpwZ3wzMGYwYTgzYTMyYzIzMzY3MTQ1NTVhNmI5ZWNhZjE1NGE1NWMzNjhkNzU4MWY2YWQzNDMxYjQ1NzAxNDI3ZGFm",
];

export default function Header() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => {
        if (prev >= 3) {
          return 0;
        }

        return prev + 1;
      });
    }, 4000);

    return function cleanup() {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="slideshow-conainer">
      <a
        className="prev"
        onClick={() =>
          setIndex((prev) => {
            if (prev === 0) return 4;
            return prev - 1;
          })
        }
      >
        &#10094;
      </a>

      {image.map((item) => {
        return (
          <div
            key={item}
            className={`slides ${image[index] === item ? "" : "d-none"}`}
          >
            <img src={item} alt="" />;
          </div>
        );
      })}

      <a
        className="next"
        onClick={() =>
          setIndex((prev) => {
            if (prev === 3) return 0;
            return prev + 1;
          })
        }
      >
        &#10095;
      </a>
    </div>
  );
}
