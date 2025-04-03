
import { FaCloudUploadAlt, FaExpeditedssl, FaDatabase } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../store/Hooks/hook";
import { fetchitems } from "../store/slices/items/itemSlice";
import { fetchusers } from "../store/slices/user/userSlice";

const features = [
  {
    name: 'Manage Products.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: <FaCloudUploadAlt />,
  },
  {
    name: 'Manage Users.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: <FaExpeditedssl />,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: <FaDatabase />,
  },
]

export default function Home() {


    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.items.items);
    const users = useAppSelector((state) => state.users.user);
  

    if (products.length === 0 && users.length === 0) {
      dispatch(fetchitems());
      dispatch(fetchusers());
    }

  // useEffect(() => {
  //   dispatch(fetchitems());
  //   dispatch(fetchusers());
  // }, []);


  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">Manage Efficiently</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                A better workflow with better Management
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                iste dolor cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      {/* <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" /> */}
                      <span className="absolute top-1 left-1 size-5 text-indigo-600">{feature.icon }</span>
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://tailwindui.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
