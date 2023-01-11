/* eslint-disable jsx-a11y/iframe-has-title */
import Breadcrumb from "../../components/UI/Breadcrumb";
import Input from "../../components/Form/Input";
import TextArea from "../../components/Form/TextArea";
import { BsInstagram } from "react-icons/bs";
import {
    MdOutlineAddLocationAlt,
    MdOutlineEmail,
    MdPhone,
} from "react-icons/md";
import Button from "../../components/UI/Button";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Spin from "../../components/UI/Spin";
import { showAlert } from "../../store/slices/ui-slice";
import { useEffect } from "react";
import { sendMail } from "../../store/actions/contact-action";
import { getContactPageData } from "../../store/actions/landing-action";

const Kontak = () => {
    const dispatch = useDispatch();
    const { loading, success, error } = useSelector((state) => state.contact);

    const { item } = useSelector((state) => state.landing);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm({
        mode: "all",
    });

    useEffect(() => {
        if (success) {
            dispatch(showAlert({ variant: "success", message: success }));
        }
        if (error) {
            dispatch(showAlert({ variant: "failed", message: error }));
        }
    }, [success, error, dispatch]);

    useEffect(() => {
        dispatch(getContactPageData());
    }, [dispatch]);

    const onSubmit = (data) => {
        if (!isValid) return;

        dispatch(sendMail(data));
        reset();
    };

    return (
        <>
            <Breadcrumb title="Kontak Kami" />
            <section className="container-custom py-10 w-full h-[450px] overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.687915874803!2d107.64700641530236!3d-6.927857094994467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e80a699f1971%3A0xca4c51951a56650c!2sPanti%20Asuhan%20Al-Hidayah!5e0!3m2!1sid!2sid!4v1666696368586!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </section>
            <section className="container-custom py-4 w-full flex flex-col gap-10 md:flex-row-reverse">
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <h2 className="text-gray-700 text-lg mb-3">
                        Hubungi kami melalui form dibawah ini.
                    </h2>
                    <div className="flex flex-col lg:flex-row lg:gap-3">
                        <Input
                            options={{
                                ...register("name", {
                                    required: "Nama Lengkap tidak boleh kosong",
                                }),
                            }}
                            id="name"
                            label="Nama Lengkap"
                            requireIcon="true"
                            hasError={!!errors?.name}
                            errorMessage={errors?.name?.message}
                        />
                        <Input
                            options={{
                                ...register("email", {
                                    required: "E-Mail tidak boleh kosong",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address",
                                    },
                                }),
                                type: "email",
                            }}
                            id="email"
                            label="E-Mail"
                            requireIcon="true"
                            hasError={!!errors?.email}
                            errorMessage={errors?.email?.message}
                        />
                    </div>
                    <Input
                        options={{
                            ...register("subject", { required: "Subjek tidak boleh kosong" }),
                        }}
                        id="subject"
                        label="Subjek"
                        requireIcon="true"
                        hasError={!!errors?.subject}
                        errorMessage={errors?.subject?.message}
                    />
                    <TextArea
                        id="keterangan"
                        label="Keterangan"
                        options={{
                            ...register("keterangan"),
                            rows: "4",
                        }}
                    ></TextArea>
                    <Button
                        className="flex gap-2"
                        options={{
                            type: "submit",
                            disabled: !isValid,
                        }}
                    >
                        {loading && <Spin />}
                        Kirim
                    </Button>
                </form>
                <div className="w-full flex flex-col gap-2 md:gap-4">
                    <div className="flex flex-row gap-2">
                        <span className="self-start rounded-full bg-gray-300 text-gray-700 p-3">
                            <MdOutlineAddLocationAlt size={32} />
                        </span>
                        <div className="flex flex-col gap-1">
                            <h3 className="pt-5 font-semibold text-[17px]">Alamat</h3>
                            {item?.alamat}
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <span className="self-start rounded-full bg-gray-300 text-gray-700 p-3">
                            <MdPhone size={32} />
                        </span>
                        <div className="flex flex-col gap-1">
                            <h3 className="pt-5 font-semibold text-[17px]">Telepon</h3>
                            {item?.no_telp}
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <span className="self-start rounded-full bg-gray-300 text-gray-700 p-3">
                            <BsInstagram size={32} />
                        </span>
                        <div className="flex flex-col gap-1">
                            <h3 className="pt-5 font-semibold text-[17px]">Instagram</h3>
                            {item?.instagram}
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <span className="self-start rounded-full bg-gray-300 text-gray-700 p-3">
                            <MdOutlineEmail size={32} />
                        </span>
                        <div className="flex flex-col gap-1">
                            <h3 className="pt-5 font-semibold text-[17px]">E-Mail</h3>
                            {item?.email}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Kontak;
