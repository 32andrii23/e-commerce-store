export const Footer = () => {
    return (
        <footer className="bg-white border-t">
            <div className="mx-auto py-10">
                <p className="text-center text-sm text-black">
                    &copy; {new Date().getFullYear()}, бла бла бла
                </p>
            </div>
        </footer>
    );
};