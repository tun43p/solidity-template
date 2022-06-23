export default function run(method: Promise<void>): void {
  method.catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
