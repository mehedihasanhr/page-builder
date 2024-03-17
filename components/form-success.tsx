import { Alert, AlertDescription } from "@/components/ui/alert";

export default function FormSuccessMessage({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <Alert className="bg-green-50 text-green-500 font-medium">
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
