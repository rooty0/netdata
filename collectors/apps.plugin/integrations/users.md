<!--startmeta
custom_edit_url: "https://github.com/netdata/netdata/edit/master/collectors/apps.plugin/integrations/users.md"
meta_yaml: "https://github.com/netdata/netdata/edit/master/collectors/apps.plugin/metadata.yaml"
sidebar_label: "Users"
learn_status: "Published"
learn_rel_path: "Data Collection/Processes and System Services"
message: "DO NOT EDIT THIS FILE DIRECTLY, IT IS GENERATED BY THE COLLECTOR'S metadata.yaml FILE"
endmeta-->

# Users

Plugin: apps.plugin
Module: users

<img src="https://img.shields.io/badge/maintained%20by-Netdata-%2300ab44" />

## Overview

This integration monitors resource utilization on a user context.



This collector is supported on all platforms.

This collector supports collecting metrics from multiple instances of this integration, including remote instances.


### Default Behavior

#### Auto-Detection

This integration doesn't support auto-detection.

#### Limits

The default configuration for this integration does not impose any limits on data collection.

#### Performance Impact

The default configuration for this integration is not expected to impose a significant performance impact on the system.


## Metrics

Metrics grouped by *scope*.

The scope defines the instance that the metric belongs to. An instance is uniquely identified by a set of labels.



### Per Users instance



This scope has no labels.

Metrics:

| Metric | Dimensions | Unit |
|:------|:----------|:----|
| users.cpu | a dimension per user | percentage |
| users.cpu_user | a dimension per user | percentage |
| users.cpu_system | a dimension per user | percentage |
| users.cpu_guest | a dimension per user | percentage |
| users.mem | a dimension per user | MiB |
| users.rss | a dimension per user | MiB |
| users.vmem | a dimension per user | MiB |
| users.swap | a dimension per user | MiB |
| users.major_faults | a dimension per user | page faults/s |
| users.minor_faults | a dimension per user | page faults/s |
| users.preads | a dimension per user | KiB/s |
| users.pwrites | a dimension per user | KiB/s |
| users.lreads | a dimension per user | KiB/s |
| users.lwrites | a dimension per user | KiB/s |
| users.threads | a dimension per user | threads |
| users.processes | a dimension per user | processes |
| users.voluntary_ctxt_switches | a dimension per app group | processes |
| users.involuntary_ctxt_switches | a dimension per app group | processes |
| users.uptime | a dimension per user | seconds |
| users.uptime_min | a dimension per user | seconds |
| users.uptime_avg | a dimension per user | seconds |
| users.uptime_max | a dimension per user | seconds |
| users.files | a dimension per user | open files |
| users.sockets | a dimension per user | open sockets |
| users.pipes | a dimension per user | open pipes |



## Alerts

There are no alerts configured by default for this integration.


## Setup

### Prerequisites

No action required.

### Configuration

#### File

There is no configuration file.
#### Options



There are no configuration options.

#### Examples
There are no configuration examples.

