import { useState, useEffect } from "react";
import { CircularProgress, Button } from "@mui/material";

const ButtonForm = ({
  onClick,
  loading,
  isCompleted,
  defaultTitle,
  sx = {},
}) => {
  const [body, setBody] = useState(defaultTitle);

  useEffect(() => {
    if (loading) {
      setBody(<CircularProgress size={20} />);
      return;
    }
    if (isCompleted && !loading) {
      setBody("good");
      setTimeout(() => {
        setBody(defaultTitle);
      }, 5000);
    }
    if (!isCompleted && !loading) {
      setBody(defaultTitle);
    }
  }, [loading, isCompleted]);

  return (
    <Button
      sx={sx}
      disabled={loading}
      variant="contained"
      color="primary"
      onClick={onClick}
    >
      {body}
    </Button>
  );
};

export default ButtonForm;
