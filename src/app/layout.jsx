export const metadata = {
  title: 'Wandering Earl Tour',
  description: 'Welcome to Tour Booking App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
