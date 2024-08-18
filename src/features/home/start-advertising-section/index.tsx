import { Input, Select } from 'antd';
import { FC } from 'react';
import toast from 'react-hot-toast';
import styled from 'styled-components';

const StartAdvertisingSection: FC = () => {
  return (
    <section className="bg-[#EDEFF7]" id="start-advertise-now">
      <div className="w-full py-12 md:py-24 lg:py-32 bg-[#EDEFF7] flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-10 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#022739]">
                Start Advertising Now
              </h2>
              <p className="max-w-[900px] text-black text-base md:text-lg lg:text-xl">
                Send us a message, and we&apos;ll get back to you soon! InsyaAllah
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg space-y-4">
              <form className="grid gap-4">
                <Input placeholder="Fullname" size={'large'} />
                <Input placeholder="Email" size={'large'} />
                <Input placeholder="Business/Entity Name" size={'large'} />

                <StyledSelect
                  size={'large'}
                  style={{ width: '100%' }}
                  placeholder={'Advertising Budget (USD)'}
                  allowClear
                  options={[
                    { value: '<100', label: '<100' },
                    { value: '100-500', label: '100-500' },
                    { value: '500-1000', label: '500-1000' },
                    { value: '1000-5000', label: '1000-5000' },
                    { value: '5000-10000', label: '5000-10000' },
                    { value: '>10000', label: '>10000' },
                  ]}
                />

                <div
                  className="w-full bg-[#022739] text-white py-2 rounded-lg cursor-pointer text-center"
                  onClick={() => toast.success('Message sent!')}
                >
                  Send
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartAdvertisingSection;

const StyledSelect = styled(Select)`
  .ant-select-selection-placeholder {
    flex: none;
  }
`;
