import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Parameter {
  field: string;
  type: string;
  required: boolean;
  description: string;
}

interface ParamTableProps {
  parameters: Parameter[];
}

export const ParamTable = ({ parameters }: ParamTableProps) => {
  return (
    <div className="rounded-lg border border-border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="font-semibold">Field</TableHead>
            <TableHead className="font-semibold">Type</TableHead>
            <TableHead className="font-semibold">Required</TableHead>
            <TableHead className="font-semibold">Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {parameters.map((param) => (
            <TableRow key={param.field}>
              <TableCell>
                <code className="code-inline">{param.field}</code>
              </TableCell>
              <TableCell>
                <Badge variant="secondary" className="font-mono text-xs">
                  {param.type}
                </Badge>
              </TableCell>
              <TableCell>
                {param.required ? (
                  <Badge variant="default" className="bg-success">
                    ✓
                  </Badge>
                ) : (
                  <Badge variant="outline">—</Badge>
                )}
              </TableCell>
              <TableCell className="text-docs-text">{param.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
