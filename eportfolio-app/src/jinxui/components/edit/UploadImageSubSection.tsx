import React from "react"
import styled from "styled-components"
import Paper from "@material-ui/core/Paper"
import AddPhotoAlternateOutlined from "@material-ui/icons/AddPhotoAlternateOutlined"
import { 
  useUser,
  UserImage,
 } from "jinxui"

const StyledInput = styled.input`
  display: none;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 20px 30px 1fr;
  grid-template-rows: 1fr 30px 20px;
`;

const ImageGridMain = styled.div`
  grid-column: 1/4;
  grid-row: 1/4;
  object-fit: cover;
`;

const ImageGridIcon = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
  object-fit: cover;
`;

const StyledImageUploadOverlay = styled(Paper)`
  grid-column: 1/4;
  grid-row: 1/4;
  display: grid;
  width: 100%;
  height: 100%;
  align-content: center;
  text-align: center;
  font-size: 20px;
  opacity: 0%;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  :hover {
    opacity: 65%;
  }
  cursor: pointer;
`;

const StyledImageUploadButton = styled(AddPhotoAlternateOutlined)`
  z-index: 2;
`;

function UploadImageSubSection(
  key: string,
  path: any,
  setImageResponse: any
) {
  const { uploadImage } = useUser();
  // const classes = useStyles();
  return (
    <>
      <label htmlFor={key}>
        <StyledInput
          accept="image/*"
          id={key}
          multiple
          type="file"
          onChange={(event) => {
            if (event.currentTarget.files) {
              uploadImage(
                event.currentTarget.files[0],
                event.currentTarget.files[0].name
              )
                .then((response) => {
                  console.log(response);
                  setImageResponse(key, response.data);
                })
                .catch((error) => {
                  console.log(error);
                });
            } else {
              console.log("Image failure");
            }
          }}
        />
        <ImageGrid>
          <ImageGridMain>
            <UserImage src={path} />{" "}
          </ImageGridMain>
          <StyledImageUploadOverlay elevation={0} square>
            Upload Image
          </StyledImageUploadOverlay>
          <ImageGridIcon>
            <StyledImageUploadButton />
          </ImageGridIcon>
        </ImageGrid>
      </label>
    </>
  );
}

export default UploadImageSubSection