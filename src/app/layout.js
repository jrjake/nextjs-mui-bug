import dynamic from "next/dynamic";
import { CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";


export default function RootLayout({ children }) {
  // This is {} when "type": "module" in package.json, but [Function (anonymous)] otherwise
  // Naturally, using this {} throws an error: "Error: Element type is invalid. Received a promise that resolves to: [object Module]. Lazy element type must resolve to a class or function."
  const Box = dynamic(() => import('@mui/material/Box'), {
    ssr: false,
  });
  //console.log(Box);

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <CssBaseline />
          <Box>
            {children}
          </Box>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
