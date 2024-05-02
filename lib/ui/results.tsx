import Image from "next/image";
import Link from "next/link";
import {
  File,
  Home,
  LineChart,
  ListFilter,
  MapIcon,
  MapPinned,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import active from "@/images/icons8-gps-signal.gif";
import { MapDialogDemo } from "../components/mapDialog";
import { calculateStatus } from "../utils";

const data = [
  {
    signal_strenght: -70,
    signal_quality: -10,
    coverage: 0.8,
    inference_level: -75,
    coverage_size: 0.8,
  },
];

export function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <TabsContent value="all">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Analytics Results</CardTitle>
                  <CardDescription>
                    View cell deployment analytics.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className=" text-lg">
                          <Image
                            alt="Product image"
                            className="aspect-square rounded-md object-cover"
                            height="44"
                            src={active}
                            width="44"
                          />
                        </TableHead>
                        <TableHead className="text-lg">
                          Signal Strenght (dBm)
                        </TableHead>
                        <TableHead className=" text-lg">
                          Signal Quality (dB)
                        </TableHead>
                        <TableHead className="text-lg">Coverage</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Inference Level (dBm)
                        </TableHead>
                        <TableHead className="text-lg">
                          Coverage Size (Km)
                        </TableHead>
                        <TableHead>
                          <span className="text-lg">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data.map((item, idx) => (
                        <TableRow>
                          <TableCell className="hidden sm:table-cell">
                            <Badge
                              className=" text-lg text-green-500"
                              variant="outline"
                            >
                              <p className=" text-lg font-semibold text-green-500">
                                {calculateStatus(
                                  item.signal_strenght,
                                  item.signal_quality,
                                  item.inference_level
                                )}
                              </p>
                            </Badge>
                          </TableCell>
                          <TableCell className="font-medium text-lg">
                            {item.signal_strenght}
                          </TableCell>
                          <TableCell className="text-lg">
                            {item.signal_quality}
                          </TableCell>
                          <TableCell className=" text-lg">
                            {item.coverage}
                          </TableCell>
                          <TableCell className="text-lg">
                            {item.inference_level}
                          </TableCell>
                          <TableCell className="text-lg">
                            {item.coverage_size}
                          </TableCell>
                          <TableCell>
                            <MapDialogDemo
                              status={calculateStatus(
                                item.signal_strenght,
                                item.signal_quality,
                                item.inference_level
                              )}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
