import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface ErrorCode {
  code: string;
  message: string;
  description: string;
}

interface ErrorTableProps {
  errors: ErrorCode[];
}

export const ErrorTable = ({ errors }: ErrorTableProps) => {
  const getStatusVariant = (code: string) => {
    if (code.startsWith("4")) return "destructive";
    if (code.startsWith("5")) return "destructive";
    return "secondary";
  };

  return (
    <div className="rounded-lg border border-border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="font-semibold">Code</TableHead>
            <TableHead className="font-semibold">Message</TableHead>
            <TableHead className="font-semibold">Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {errors.map((error) => (
            <TableRow key={error.code}>
              <TableCell>
                <Badge variant={getStatusVariant(error.code)} className="font-mono">
                  {error.code}
                </Badge>
              </TableCell>
              <TableCell>
                <code className="code-inline text-xs">{error.message}</code>
              </TableCell>
              <TableCell className="text-docs-text">{error.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
