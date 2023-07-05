import React from "react";
import { PhotoAlbum, RenderContainer, RenderPhoto, RenderRowContainer } from "react-photo-album";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import '../scss/photos.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faUndo, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'


//TODO: image gallery
//https://react-photo-album.com/examples/renderers
//https://codesandbox.io/p/sandbox/github/igordanchenko/react-photo-album/tree/main/examples/custom-renderers?file=%2Fsrc%2FApp.tsx
const renderRowContainer = ({ rowContainerProps, rowIndex, rowsCount, children }) => (
    <>
        <div {...rowContainerProps}>{children}</div>
        {rowIndex < rowsCount - 1 && (
            <div
                style={{
                    borderTop: "2px solid #eee",
                    marginBottom: "20px",
                }}
            />
        )}
    </>
);

const renderContainer = ({ containerProps, children, containerRef }) => (
    <div
        style={{
            border: "2px solid #eee",
            borderRadius: "10px",
            padding: "20px",
        }}
    >
        <div ref={containerRef} {...containerProps}>
            {children}
        </div>
    </div>
);

const renderPhoto = ({ layout, layoutOptions, imageProps: { alt, style, ...restImageProps } }) => (
    <div
        style={{
            border: "2px solid white",
            borderRadius: "5px",
            boxSizing: "content-box",
            alignItems: "center",
            width: style?.width,
            // padding: `${layoutOptions.padding - 2}px`,
            padding: "17px",
            paddingBottom: "30px",
            boxShadow: " 0 0.2rem 1.2rem rgba(0,0,0,0.2)"
            // boxShadow: "0 1px 3px .05px rgba(0,0,0,0.6)",
        }}
    >
        <img alt={alt} style={{ ...style, width: "100%", padding: 0 }} {...restImageProps} />
        {/* <div
            style={{
                paddingTop: "8px",
                paddingBottom: "8px",
                overflow: "visible",
                whiteSpace: "nowrap",
                textAlign: "center",
            }}
        >
            {Math.round(layout.width) + " x " + Math.round(layout.height)}
        </div> */}
    </div>
);



const photos = [
    { src: "https://i.ibb.co/XppRh2C/image1.jpg", width: 100, height: 100 },
    { src: "https://i.ibb.co/64gqcp1/image2.jpg", width: 200, height: 200 },
    { src: "https://i.ibb.co/6FkxxN8/21148003-353606085068638-6023853110525427712-n-17883300802112003.jpg", width: 400, height: 300 },
    { src: "https://i.ibb.co/9gZYFx4/22071294-1881576545216400-4481301140717174784-n-17842300654208942.jpg", width: 200, height: 300 },
    { src: "https://i.ibb.co/XS5hBkH/23421268-125728274774726-1402596852695564288-n-17894976502106440.jpg", width: 400, height: 400 },
    { src: "https://i.ibb.co/7kVKRzR/28158679-402415823505522-8504656740732633088-n-17901833758179311.jpg", width: 400, height: 350 },
    { src: "https://i.ibb.co/H4Ff7Mj/30602682-166838687480342-2704345399379886080-n-17879118895217414.jpg", width: 480, height: 360 },
    { src: "https://i.ibb.co/tZxjhwW/36160180-438312519971734-1337734952376074240-n-17869823404255232.jpg", width: 200, height: 300 },
    { src: "https://i.ibb.co/1MsHQSB/44808311-186182568984854-6909064003582951424-n-17984387857115044.jpg", width: 400, height: 300 },
    { src: "https://i.ibb.co/ZVQLSPc/65916419-219033319060122-2109120341456300937-n-18058909633091587.jpg", width: 480, height: 360 },
    { src: "https://i.ibb.co/wh0rzcL/67740803-494006174491051-6191241578400162702-n-17914490371339318.jpg", width: 300, height: 400 }
];

export default function Gallery() {
    return (
        <>
            <Helmet>
                <style>
                    {`
                            body {
                                background-color: white;
                            }
                    `}
                </style>
            </Helmet>
            <PhotoAlbum
                layout="rows"
                padding={20}
                photos={photos}
                // renderRowContainer={renderRowContainer}
                renderContainer={renderContainer}
                renderPhoto={renderPhoto}
            />
            <div className="backButtonContainer">
                <Link className="goBackHomeItem questionSignOnHover" to="/"><FontAwesomeIcon icon={faArrowLeft} size="1x" className="backIconFa" />go back</Link>
            </div>
        </>
    );
}
