/* eslint-disable no-param-reassign */
/* eslint-disable import/no-named-as-default */
import React, { useState } from "react";
import ImageCompressor from "./components/ImageCompressor";
import Faq from "./components/Faq";
import Features from "./components/Features";
import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  const [faqs, setfaqs] = useState([
    {
      question: "Q.1 How to compress Images From allcompressimage.com?",
      answer:
        "Allcompressimage.com is widely used to reduce the size of PNG files. We often need to decrease the file size for our images as the files with larger size take a lot of time to get load and it becomes really difficult so here we use file compressors. Now Allcompressimage.com does it in a very easy and user-friendly way. The process to reduce the size of your PNG file is that you just have to open Allcompressimage.com in your browser in mobile or PC. Allcompressimage.com work with browsers such as Chrome, Firefox and safari. Now as you open Allcompressimage.com you will see an option saying drop your .PNG or .JPG file here. Then you can drag a file here or you can click on that option and it will take you to your files. By doing it in either of the ways you can select your file and that’s it. Now you have a compressed version of your file with highly reduced size.",
      open: false
    },
    {
      question: "Q2. What is Image Compression?",
      answer:
        "Image Compression means when any big image is compressed into a small image. Image Compression is a kind of Compression approaches that lessen the size of an image without any loss of information as well as without downgrading its quality.In simple words, the technique of reducing data of image by which it is represented without loss of any information. It applies to digital images so that reasonable cost is incurred on storage and transmogrification of data.For Example:- Any video of 2GB which is of  2 hours before compression but after that, the video is of 980MB but time will remain the same because there will be no effect on the information.Image Compression can be split into 2 categories i.e	Lossy Compression ,	Lossless Compression.",
      open: false
    },
    {
      question: "Q3. What are recent Image Compression techniques?",
      answer:
        "There are two types of image compression techniques, lossy and lossless. Lossless compression is usually done for medical and legal documents and computer programs whereas lossy compression is carried out for videos and digital images where only a few errors pop up.In lossless compression, just like the term ‘lossless’, there is no loss or no decrease to the quality of the image, only the size is reduced. But lossy compression permanently clears out the data.There are different types of compressed image files, some of them are PNG, JPEG and GIF.PNG is the abbreviation for Portable Network Graphics. It comes under a lossless compression type. The quality o the file when converted to PNG is very high. PNG is often used when the image contains layers of graphics that to be separated from each other.JPEG is usually used for digital camera images, as the file size is smaller. JPEG comes under lossy compression type, which means it can compress the file more than the PNG.GIF is usually used to store simple animated images. It is usually used when the image needs more transparency. It is not used for high-quality photographs.",
      open: false
    },
    {
      question:
        "Q.4 What compression techniques are used by WhatsApp while sending images and videos?",
      answer:
        "Watsapp is a messenger app where people share lots of information and in today’s world it is the leading platform where people share information. So image compression is very essential as more storage space is needed.The usual compression techniques used by WhatsApp is JPEG, it helps to reduce the file size with a lesser quality image. JPEG is a lossy compression type. It makes the file size smaller leaving more storage space. Usually, pictures of high quality are shared on WhatsApp so even if we convert the file to jpeg format people won’t realize the missing bits in the picture.For video compression there are various applications, we just have to download those apps. When we compress videos the sending time required is very less. A point to keep in mind when we compress the video is that we have to reduce the quality of the video to either medium or low so as to reduce the file size, the primary aim of compression.",
      open: false
    },
    {
      question: "Q.5 Why Allcompressimage.com is best for Image Compression?",
      answer:
        "Allcompressimage.com is best for image compression as it smartly and efficiently reduces the size of your file. It uses efficient techniques for the compression of file size such as it smartly decreases the colours of your file. And the best part is there is the nearly invisible change in the appearance of the file although It reduces the size of the file up to 70%.It compresses the file but the images are still larger so there is no difference in the image but the size of the file is very much reduced and it helps to load faster so you get your website and pages with a much better experience and you can use them effectively. The technique that tiny png.com uses is very effective is it selectively decrease the number of colours present in the image and then compresses it so that it decreases the number of bits used in the file. It takes a lesser bit of memory to store the file.",
      open: false
    },
    {
      question: "Q.6 Why Use Image Compression?",
      answer:
        "Image Compression is used for many days as it is used to reduce the size of a file as we all know that it takes a lot of time to load a PNG or JPG image. image compression helps to reduce the size of a file considerably without changing much of its appearance It help s to create webpages and files effectively with a much lower rate of loading.While Using website awesome applications it is very much required that the pages load faster so to help it out we use Image Compression techniques by which the image or the file is compressed without much change in its appearance so that the file takes a lesser bit and loads faster this also helps in making SEO effective web page.",
      open: false
    },
    {
      question: "Q.7 How does image compression work?",
      answer:
        "image compression is done by the method of quantization in which the similar colours in your PNG file are taken and thus reducing the size of the image by combining the colours.  It decreases the Colours of the file smartly and efficiently and the larger bit images are made into smaller bits.  Also, the unnecessary data is reduced and finally, it is converted to a much smaller size of the file. There is a considerable reduction in the file size but the changes are almost invisible so in this way a larger size file is converted into a much smaller size file with much less number of bits and a compressed version of the original",
      open: false
    }
  ]);

  const toggleFaq = index => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="App">
      <Navbar />
      <ImageCompressor />
      <About />
      <div className="faqs">
        <h3 className="f">
          <u>
            FA<span className="q">Q</span>
          </u>
        </h3>
        {faqs.map((faq, i) => (
          <Faq faq={faq} index={i} toggleFaq={toggleFaq} />
        ))}
      </div>

      <Features />
      <Footer />
    </div>
  );
}

export default App;
