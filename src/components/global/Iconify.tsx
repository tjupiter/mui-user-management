//icons
import { Icon, IconifyIcon } from "@iconify/react";
// mui
import { Box, BoxProps, SxProps } from "@mui/material";

interface Props extends BoxProps {
  icon: IconifyIcon | string;
  sx?: SxProps;
}

export default function Iconify({ icon, sx, ...other }: Props) {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}
