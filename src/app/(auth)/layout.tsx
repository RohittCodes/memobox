import { Button } from "@/components/ui/button";
import { AlignLeft, ArrowLeftCircle, MoveLeft } from "lucide-react";
import Link from "next/link";

const Authlayout = (
    { children }: { children: React.ReactNode }
) => {
    return (
        <div className="flex h-screen w-full flex-col">
            <Link href="/" className="mt-4 ml-4 w-24 flex items-center">
                <Button variant="ghost" className="flex items-center gap-2">
                    <ArrowLeftCircle size={24} />
                    Home
                </Button>
            </Link>
            <div className="h-full flex justify-center items-center">
                {children}
            </div>
        </div>
    );
}

export default Authlayout;