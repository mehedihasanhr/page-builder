import { Alert, AlertDescription } from "@/components/ui/alert";

export default function FormErrorMessage({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <Alert className="bg-red-50 rounded-md" variant="destructive">
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
