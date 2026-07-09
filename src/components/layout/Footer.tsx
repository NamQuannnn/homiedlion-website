import { theme } from '@/lib/theme';

export default function Footer() {
  return (
    <footer className="bg-[#7A5A2B] text-white mt-auto">
      <div className={`${theme.layout.container} py-10`}>
        <div className="flex flex-col items-center justify-center text-center space-y-2">
          <h2 className="text-lg font-semibold tracking-wider">Homie D'Lion Group</h2>
          <p className="text-[#B89A5E] text-sm">
            © {new Date().getFullYear()} Homie D'Lion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}