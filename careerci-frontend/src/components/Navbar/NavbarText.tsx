import Typography from "@mui/material/Typography";

interface NavbarTextProps {
  children: string;
}

const NavbarText = (props: NavbarTextProps) => {
  return (
    <Typography color="info" variant="h5">
      {props.children}
    </Typography>
  );
};

export default NavbarText;
