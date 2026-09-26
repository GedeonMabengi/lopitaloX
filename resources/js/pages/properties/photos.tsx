import { Head, Link, Form } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function PropertyPhotos({ property }: { property: any }) {
    return (
        <>
            <Head title={`Photos - ${property.name}`} />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-semibold">Photos - {property.name}</h1>

                <Form action={`/properties/${property.id}/photos`} method="post" className="flex items-end gap-2">
                    {({ errors, processing }) => (
                        <>
                            <div className="grid gap-2">
                                <Label htmlFor="photo">Photo</Label>
                                <Input id="photo" type="file" name="photo" required />
                                <InputError message={errors.photo} />
                            </div>
                            <Button type="submit" disabled={processing}>Téléverser</Button>
                        </>
                    )}
                </Form>

                <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                    {(property.photos ?? []).map((photo: any) => (
                        <div key={photo.id} className="relative">
                            <img src={`/storage/${photo.path}`} className="aspect-square w-full rounded-md object-cover" alt={photo.caption ?? ''} />
                            <Button asChild variant="destructive" size="sm" className="absolute right-1 top-1">
                                <Link href={`/properties/${property.id}/photos/${photo.id}`} method="delete" as="button">×</Link>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
