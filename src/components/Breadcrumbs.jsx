import { Link } from 'react-router-dom';

export default function Breadcrumbs({ items }) {
  return (
    <div className="bg-white pt-[74px] border-b border-grey">
      <div className="max-w-[1440px] mx-auto px-[120px] py-6">
        <nav className="flex items-center space-x-2 text-base">
          {items.map((item, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && (
                <span className="text-grey ml-1 mr-4">/</span>
              )}
              {item.href ? (
                <Link 
                  to={item.href} 
                  className="text-matisse hover:text-secondary transition font-inter uppercase"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-grey-2 font-inter uppercase">
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
