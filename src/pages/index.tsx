import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';

const IndexPage: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="mx-auto w-full max-w-5xl justify-center py-12 px-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-base font-medium leading-6 text-gray-500">
            Your IP Address
          </h3>
          <p className="mt-1 max-w-2xl text-4xl text-gray-900">{data.ip}</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">City</dt>
              <dd className="mt-1 text-sm text-gray-900">{data.city}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Region</dt>
              <dd className="mt-1 text-sm text-gray-900">{data.region}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Country</dt>
              <dd className="mt-1 text-sm text-gray-900">{data.country}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Coordinates</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {data.loc.replace(',', ' / ')}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Postal code</dt>
              <dd className="mt-1 text-sm text-gray-900">{data.postal}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Timezone</dt>
              <dd className="mt-1 text-sm text-gray-900">{data.timezone}</dd>
            </div>
            <div className="sm:col-span-3">
              <dt className="text-sm font-medium text-gray-500">Org</dt>
              <dd className="mt-1 text-sm text-gray-900">{data.org}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`https://ipinfo.io/?token=${process.env.TOKEN}`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
};

export default IndexPage;
