import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'

import { AppPreview } from '@/app-cms/preview/AppPreview'

export const dynamic = 'force-dynamic'

type Args = { params: Promise<{ collection: string; id: string }> }

export default async function AppPreviewPage({ params }: Args) {
  const { collection, id } = await params
  if (collection !== 'app-pages' && collection !== 'screens') notFound()

  const payload = await getPayload({ config: configPromise })
  const doc = await payload.findByID({ collection, id, depth: 1, disableErrors: true })
  if (!doc) notFound()
  const navigation = collection === 'screens' ? await payload.findGlobal({ slug: 'app-navigation', depth: 0 }) : null

  return <AppPreview collection={collection} initialData={doc} navigation={navigation} />
}
