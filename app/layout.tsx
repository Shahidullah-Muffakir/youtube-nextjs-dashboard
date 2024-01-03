import '@/app/ui/global.css';
import {inter,lusitana} from './ui/fonts'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <p className={`${lusitana.className} antialiased`}>heading</p>

        {children}
      </body>
    </html>
  );
}
