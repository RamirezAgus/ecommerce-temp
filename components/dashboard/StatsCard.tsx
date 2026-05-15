type StatsCardProps = {
    title: string,
    value: string | number,
};

export default function StatsCard({
    title,
    value,
}: StatsCardProps) {
    return (
        <div className="bg-card border border-border rounded-2xl p-6">
            <p className="text-sm text-muted mb-2">
                {title}
            </p>
            <h3 className="text-3xl font-bold text-foreground">
                {value}
            </h3>
        </div>
    )
}