initSidebarItems({"enum":[["AccelProfile","Pointer Acceleration Profile"],["ClickMethod","The click method defines when to generate software-emulated buttons, usually on a device that does not have a specific physical button available."],["DeviceCapability","Capabilities on a device."],["DeviceConfigError","Errors returned when applying configuration settings."],["Led","Mask reflecting LEDs on a device."],["ScrollMethod","The scroll method of a device selects when to generate scroll axis events instead of pointer motion events."],["SendEventsMode","The send-event mode of a device defines when a device may generate events and pass those events to the caller."],["TapButtonMap","Map 1/2/3 finger tips to buttons"]],"mod":[["event","Libinput Events"],["ffi","Unsafe c-api."]],"struct":[["Device","Representation of a single input device as seen by the kernel."],["DeviceGroup","Device group"],["Libinput","Libinput context"],["Seat","A seat has two identifiers, the physical name and the logical name."]],"trait":[["AsRaw","Trait for types that allow to optain the underlying raw libinput pointer."],["FromRaw","Trait for types that allow to be initialized from a raw pointer"],["Userdata","Trait to deal with userdata attached to this struct."]],"type":[["DeviceConfigResult","Result returned when applying configuration settings."],["LibinputInterface","libinput does not open file descriptors to devices directly, instead `open_restricted` and `close_restricted` are called for each path that must be opened."]]});