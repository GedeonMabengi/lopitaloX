import { Form, Head, Link } from '@inertiajs/react';
import { Eye, Pencil, Plus, Search, Trash2 } from 'lucide-react';
import DataTable, { EmptyRow } from '@/components/data-table';
import PageHeader from '@/components/page-header';
import Pagination from '@/components/pagination';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import patients from '@/routes/patients';
import type { Paginated } from '@/types';

type PatientRow = {
    id: number;
    code: string;
    fullName: string;
    dateOfBirth: string;
    gender: string;
    phone: string | null;
};

type Props = {
    patients: Paginated<PatientRow>;
    filters: { search?: string };
};

export default function PatientIndex({ patients: list, filters }: Props) {
    return (
        <>
            <Head title="Patients" />
            <div className="flex flex-1 flex-col gap-6 p-4">
                <PageHeader title="Patients">
                    <Button asChild>
                        <Link href={patients.create()}>
                            <Plus />
                            Nouveau patient
                        </Link>
                    </Button>
                </PageHeader>

                <Form
                    {...patients.index.form()}
                    options={{ preserveState: true }}
                    className="flex max-w-xl gap-2"
                >
                    <Input
                        name="search"
                        placeholder="Rechercher par nom ou code..."
                        defaultValue={filters.search ?? ''}
                    />
                    <Button
                        type="submit"
                        variant="outline"
                        aria-label="Rechercher"
                    >
                        <Search />
                    </Button>
                </Form>

                <DataTable>
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Nom</th>
                            <th>Date de naissance</th>
                            <th>Genre</th>
                            <th>Téléphone</th>
                            <th className="text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.data.length === 0 && (
                            <EmptyRow colSpan={6}>
                                Aucun patient trouvé.
                            </EmptyRow>
                        )}
                        {list.data.map((patient) => (
                            <tr key={patient.id}>
                                <td>{patient.code}</td>
                                <td className="font-medium">
                                    {patient.fullName}
                                </td>
                                <td>{patient.dateOfBirth}</td>
                                <td>{patient.gender}</td>
                                <td>{patient.phone ?? 'N/A'}</td>
                                <td>
                                    <div className="flex justify-end gap-1">
                                        <Button
                                            asChild
                                            variant="ghost"
                                            size="icon"
                                            aria-label="Voir"
                                        >
                                            <Link
                                                href={patients.show(patient.id)}
                                            >
                                                <Eye />
                                            </Link>
                                        </Button>
                                        <Button
                                            asChild
                                            variant="ghost"
                                            size="icon"
                                            aria-label="Modifier"
                                        >
                                            <Link
                                                href={patients.edit(patient.id)}
                                            >
                                                <Pencil />
                                            </Link>
                                        </Button>
                                        <Button
                                            asChild
                                            variant="ghost"
                                            size="icon"
                                            aria-label="Supprimer"
                                            className="text-destructive"
                                        >
                                            <Link
                                                href={patients.destroy(
                                                    patient.id,
                                                )}
                                                as="button"
                                                onBefore={() =>
                                                    confirm(
                                                        `Supprimer le patient ${patient.fullName} ?`,
                                                    )
                                                }
                                            >
                                                <Trash2 />
                                            </Link>
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </DataTable>

                <Pagination links={list.links} />
            </div>
        </>
    );
}

PatientIndex.layout = {
    breadcrumbs: [{ title: 'Patients', href: patients.index() }],
};
