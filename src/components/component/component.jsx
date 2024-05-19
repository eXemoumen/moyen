
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Input } from "@/components/ui/input"

export function Component() {
  return (
    (<div className="border rounded-lg w-full">
      <div className="relative w-full overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Company</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Input placeholder="John Doe" />
              </TableCell>
              <TableCell>
                <Input placeholder="john@example.com" />
              </TableCell>
              <TableCell>
                <Input placeholder="555-1234" />
              </TableCell>
              <TableCell>
                <Input placeholder="123 Main St, Anytown USA" />
              </TableCell>
              <TableCell>
                <Input placeholder="Acme Inc" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Input placeholder="Jane Smith" />
              </TableCell>
              <TableCell>
                <Input placeholder="jane@example.com" />
              </TableCell>
              <TableCell>
                <Input placeholder="555-5678" />
              </TableCell>
              <TableCell>
                <Input placeholder="456 Oak Rd, Somewhere City" />
              </TableCell>
              <TableCell>
                <Input placeholder="Widget Co" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Input placeholder="Bob Johnson" />
              </TableCell>
              <TableCell>
                <Input placeholder="bob@example.com" />
              </TableCell>
              <TableCell>
                <Input placeholder="555-9012" />
              </TableCell>
              <TableCell>
                <Input placeholder="789 Elm St, Othertown" />
              </TableCell>
              <TableCell>
                <Input placeholder="Gadget Labs" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Input placeholder="Sarah Lee" />
              </TableCell>
              <TableCell>
                <Input placeholder="sarah@example.com" />
              </TableCell>
              <TableCell>
                <Input placeholder="555-3456" />
              </TableCell>
              <TableCell>
                <Input placeholder="321 Pine Rd, Somewhere Else" />
              </TableCell>
              <TableCell>
                <Input placeholder="Techno Solutions" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Input placeholder="Tom Wilson" />
              </TableCell>
              <TableCell>
                <Input placeholder="tom@example.com" />
              </TableCell>
              <TableCell>
                <Input placeholder="555-7890" />
              </TableCell>
              <TableCell>
                <Input placeholder="159 Oak St, Anyplace" />
              </TableCell>
              <TableCell>
                <Input placeholder="Gizmo Inc" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Input placeholder="Emily Davis" />
              </TableCell>
              <TableCell>
                <Input placeholder="emily@example.com" />
              </TableCell>
              <TableCell>
                <Input placeholder="555-2345" />
              </TableCell>
              <TableCell>
                <Input placeholder="753 Maple Ave, Somewhere Town" />
              </TableCell>
              <TableCell>
                <Input placeholder="Techworks" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Input placeholder="Michael Brown" />
              </TableCell>
              <TableCell>
                <Input placeholder="michael@example.com" />
              </TableCell>
              <TableCell>
                <Input placeholder="555-6789" />
              </TableCell>
              <TableCell>
                <Input placeholder="951 Cedar Rd, Anyburg" />
              </TableCell>
              <TableCell>
                <Input placeholder="Gadget Makers" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Input placeholder="Jessica Thompson" />
              </TableCell>
              <TableCell>
                <Input placeholder="jessica@example.com" />
              </TableCell>
              <TableCell>
                <Input placeholder="555-0123" />
              </TableCell>
              <TableCell>
                <Input placeholder="357 Elm St, Somewhere City" />
              </TableCell>
              <TableCell>
                <Input placeholder="Techno Innovators" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Input placeholder="David Lee" />
              </TableCell>
              <TableCell>
                <Input placeholder="david@example.com" />
              </TableCell>
              <TableCell>
                <Input placeholder="555-4567" />
              </TableCell>
              <TableCell>
                <Input placeholder="852 Oak Rd, Anytown" />
              </TableCell>
              <TableCell>
                <Input placeholder="Gadget Gurus" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Input placeholder="Samantha Rodriguez" />
              </TableCell>
              <TableCell>
                <Input placeholder="samantha@example.com" />
              </TableCell>
              <TableCell>
                <Input placeholder="555-8901" />
              </TableCell>
              <TableCell>
                <Input placeholder="654 Pine St, Somewhere Else" />
              </TableCell>
              <TableCell>
                <Input placeholder="Techno Wizards" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Input placeholder="Christopher Martinez" />
              </TableCell>
              <TableCell>
                <Input placeholder="christopher@example.com" />
              </TableCell>
              <TableCell>
                <Input placeholder="555-2345" />
              </TableCell>
              <TableCell>
                <Input placeholder="159 Maple Ave, Anyplace" />
              </TableCell>
              <TableCell>
                <Input placeholder="Gadget Experts" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Input placeholder="Olivia Hernandez" />
              </TableCell>
              <TableCell>
                <Input placeholder="olivia@example.com" />
              </TableCell>
              <TableCell>
                <Input placeholder="555-6789" />
              </TableCell>
              <TableCell>
                <Input placeholder="753 Cedar Rd, Somewhere Town" />
              </TableCell>
              <TableCell>
                <Input placeholder="Techno Gurus" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>)
  );
}
