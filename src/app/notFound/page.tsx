import Link from "next/link";

export default function Page() {
  return (
    <html lang="en">
      <body>
        <div>
          <h1>Custom 404 Page from middleware</h1>
          <br />
          <Link href="/en">Go To En</Link>
          <br />
        </div>
      </body>
    </html>
  );
}