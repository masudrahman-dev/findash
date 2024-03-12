import React from "react";
import InfoCircleIcon from "../../../components/icons/InfoCircleIcon";
import NextSelect from "../../../components/molecules/next-select/NextSelect";

const Currency = () => {
  return (
    <div>
      <div className="">
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-1 text-nowrap text-subtitle ">
            <span>{"Currency"}</span>
            <InfoCircleIcon iconWrapperStyle="h-5 w-5" />
          </p>
          <form>
            {/* FIXME: Fix it */}
            <NextSelect />
          </form>
        </div>

        <div className="space-y-6 pt-8">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.8936 32.9375C25.7123 32.9375 32.8311 25.8188 32.8311 17H0.956055C0.956055 25.8188 8.0748 32.9375 16.8936 32.9375Z"
                  fill="#F9F9F9"
                />
                <path
                  d="M16.8936 1.0625C8.0748 1.0625 0.956055 8.18125 0.956055 17H32.8311C32.8311 8.18125 25.7123 1.0625 16.8936 1.0625Z"
                  fill="#ED4C5C"
                />
              </svg>

              <div>
                <p className="text-base">Rupiah</p>
              </div>
            </div>
            <div className="flex gap-3 text-end">
              <p className="text-base">-$23.21</p>
              <p className="text-label text-gray">IDR</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 32.9375C25.802 32.9375 32.9375 25.802 32.9375 17C32.9375 8.19796 25.802 1.0625 17 1.0625C8.19796 1.0625 1.0625 8.19796 1.0625 17C1.0625 25.802 8.19796 32.9375 17 32.9375Z"
                  fill="#2A5F9E"
                />
                <path
                  d="M17 6.26855L17.3719 7.4373H18.5938L17.6375 8.18105L18.0094 9.3498L17 8.60606L15.9906 9.3498L16.3625 8.18105L15.4062 7.4373H16.6281L17 6.26855ZM17 24.3311L17.3719 25.4998H18.5938L17.6375 26.1904L18.0094 27.4123L17 26.6686L15.9906 27.4123L16.3625 26.1904L15.4062 25.4998H16.6281L17 24.3311ZM21.4625 22.8436L21.8344 24.0123H23.1094L22.1 24.7561L22.4719 25.9248L21.4625 25.1811L20.4531 25.9248L20.8781 24.7561L19.8688 24.0123H21.0906L21.4625 22.8436ZM24.5438 19.7623L24.9156 20.9311H26.1906L25.1813 21.6748L25.5531 22.8436L24.5438 22.0998L23.5344 22.8436L23.9594 21.6748L22.95 20.9311H24.1719L24.5438 19.7623ZM26.0312 15.2998L26.4031 16.4686H27.625L26.6156 17.2123L26.9875 18.3811L26.0312 17.6373L25.0219 18.3811L25.3937 17.2123L24.3844 16.4686H25.6063L26.0312 15.2998ZM24.5438 10.7842L24.9156 12.0061H26.1906L25.1813 12.6967L25.5531 13.8654L24.5438 13.1748L23.5344 13.8654L23.9594 12.6967L22.95 12.0061H24.1719L24.5438 10.7842ZM21.4625 7.70293L21.8344 8.9248H23.1094L22.1 9.61543L22.4719 10.7842L21.4625 10.0936L20.4531 10.7842L20.8781 9.61543L19.8688 8.9248H21.0906L21.4625 7.70293ZM12.5375 22.8436L12.1656 24.0123H10.8906L11.9 24.7561L11.5281 25.9248L12.5375 25.1811L13.5469 25.9248L13.1219 24.7561L14.1313 24.0123H12.9094L12.5375 22.8436ZM9.45625 19.7623L9.08438 20.9311H7.80937L8.81875 21.6748L8.44687 22.8436L9.45625 22.0998L10.4656 22.8436L10.0406 21.6748L11.05 20.9311H9.82812L9.45625 19.7623ZM7.96875 15.2998L7.59688 16.4686H6.375L7.38437 17.2123L7.0125 18.3811L7.96875 17.6373L8.97812 18.3811L8.60625 17.2123L9.61563 16.4686H8.39375L7.96875 15.2998ZM9.45625 10.7842L9.08438 12.0061H7.80937L8.81875 12.6967L8.44687 13.8654L9.45625 13.1748L10.4656 13.8654L10.0406 12.6967L11.05 12.0061H9.82812L9.45625 10.7842ZM12.5375 7.70293L12.1656 8.9248H10.8906L11.9 9.61543L11.5281 10.7842L12.5375 10.0936L13.5469 10.7842L13.1219 9.61543L14.1313 8.9248H12.9094L12.5375 7.70293Z"
                  fill="#FFCE31"
                />
              </svg>

              <div>
                <p className="text-base">Rupiah</p>
              </div>
            </div>
            <div className="flex gap-3 text-end">
              <p className="text-base">-$23.21</p>
              <p className="text-label text-gray">IDR</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currency;
