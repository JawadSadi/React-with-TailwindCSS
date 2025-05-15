// import React from "react";
// import UserList from "./components/UserList";

// ***** Daisy ui
// export default function App() {
//   return (
//     <div>
//       <button className="btn btn-neutral">Neutral</button>
//       <button className="btn btn-primary">Primary</button>
//       <button className="btn btn-secondary">Secondary</button>
//       <button className="btn btn-accent">Accent</button>
//       <button className="btn btn-info">Info</button>
//       <button className="btn btn-success">Success</button>
//       <button className="btn btn-warning">Warning</button>
//       <button className="btn btn-error">Error</button>
//     </div>
//   );
// }

// *****Redix
// import { Flex, Text, Button } from "@radix-ui/themes";

// export default function MyApp() {
//   return (
//     <Flex direction="column" gap="2">
//       <Text>Hello from Radix Themes :)</Text>
//       <Button>Let's go</Button>
//     </Flex>
//   );
// }

// *****shadecn
// import * as React from "react";

// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// export function App() {
//   return (
//     <Card className="w-[350px]">
//       <CardHeader>
//         <CardTitle>Create project</CardTitle>
//         <CardDescription>Deploy your new project in one-click.</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <form>
//           <div className="grid w-full items-center gap-4">
//             <div className="flex flex-col space-y-1.5">
//               <Label htmlFor="name">Name</Label>
//               <Input id="name" placeholder="Name of your project" />
//             </div>
//             <div className="flex flex-col space-y-1.5">
//               <Label htmlFor="framework">Framework</Label>
//               <Select>
//                 <SelectTrigger id="framework">
//                   <SelectValue placeholder="Select" />
//                 </SelectTrigger>
//                 <SelectContent position="popper">
//                   <SelectItem value="next">Next.js</SelectItem>
//                   <SelectItem value="sveltekit">SvelteKit</SelectItem>
//                   <SelectItem value="astro">Astro</SelectItem>
//                   <SelectItem value="nuxt">Nuxt.js</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>
//         </form>
//       </CardContent>
//       <CardFooter className="flex justify-between">
//         <Button variant="outline">Cancel</Button>
//         <Button>Deploy</Button>
//       </CardFooter>
//     </Card>
//   );
// }

// export default App;

// ***** REACT HOOK FORM
import React from "react";
import FormApp from "./components/Form";

export default function App() {
  return (
    <div>
      <FormApp />
    </div>
  );
}
