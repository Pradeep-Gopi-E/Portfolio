import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    id?: string;
    className?: string;
    containerClassName?: string;
}

export function Section({ children, id, className, containerClassName, ...props }: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                "min-h-screen flex flex-col justify-center py-20 relative overflow-hidden",
                className
            )}
            {...props}
        >
            <Container className={containerClassName}>{children}</Container>
        </section>
    );
}
