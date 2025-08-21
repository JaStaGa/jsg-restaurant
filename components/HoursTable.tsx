import hours from "@/data/hours.json";

export default function HoursTable() {
    const rows = hours as { day: string; opens: string; closes: string }[];
    return (
        <table className="mt-4 w-full text-sm border rounded">
            <tbody>
                {rows.map((r) => (
                    <tr key={r.day} className="border-b last:border-0">
                        <td className="p-3 w-24 font-medium">{r.day}</td>
                        <td className="p-3">{r.opens} – {r.closes}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
